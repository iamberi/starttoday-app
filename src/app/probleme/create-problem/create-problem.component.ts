import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProblemService } from './../../services/problem.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StorageService } from 'src/app/services/storage/storage.service';
import { MEDIA_STORAGE_PATH } from '../../const/storage.const.js';
import { UtilService } from '../../services/util/util.service';

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.scss']
})
export class CreateProblemComponent implements OnInit, OnDestroy {
  public problemForm: FormGroup;
  //
  destroy$: Subject<null> = new Subject();
  fileToUpload: File;
  problemImagePreview: string | ArrayBuffer;
  pictureForm: FormGroup;
  submitted = false;
  // problem: firebase.Problem;

  constructor(
    public problemService: ProblemService,
    public formBuilder: FormBuilder,
    public router: Router,
    private storageService: StorageService,
    private readonly utilService: UtilService,
  ) {}

  ngOnInit(): void {
    this.problemForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: [''],
      location: [''],
      date: new Date(),
      votes: 0,
      statusvotes: 'vote',
      socialpoints: 3,
      photo: [null, Validators.required],
    });
    this.problemForm
    .get('photo')
    .valueChanges.pipe(takeUntil(this.destroy$))
    .subscribe((newValue) => {
      this.handleFileChange(newValue.files);
    });
  }

  handleFileChange([problemImage]) {
    this.fileToUpload = problemImage;
    const reader = new FileReader();
    reader.onload = (loadEvent) => (this.problemImagePreview = loadEvent.target.result);
    reader.readAsDataURL(problemImage);
  }

  postProblem() {
    this.submitted = true;
    const mediaFolderPath = `${MEDIA_STORAGE_PATH}/images/${new Date().getTime()}`; //`images/${new Date().getTime()}_${file.name}`

    const { downloadUrl$ } = this.storageService.uploadFileAndGetMetadata(
      mediaFolderPath,
      this.fileToUpload,
    );

//    this.uploadProgress$ = uploadProgress$;

    downloadUrl$
      .pipe(
        takeUntil(this.destroy$)/* ,
        catchError((error) => {
          this.snackBar.open(`${error.message} 😢`, 'Close', {
            duration: 4000,
          });
          return;
        }), */
      )
      .subscribe((downloadUrl) => {
        this.submitted = false;
        this.router.navigate([`/probleme`]);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  private image(photoControl: AbstractControl): { [key: string]: boolean } | null {
    if (photoControl.value) {
      const [problemImage] = photoControl.value.files;
      return this.utilService.validateFile(problemImage)
        ? null
        : {
            image: true,
          };
    }
    return;
  }


  onSubmit() {
    this.problemService.createProblem(this.problemForm.value);
    this.router.navigate(['/probleme']);
   }
}
