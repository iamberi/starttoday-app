import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-challenge',
  templateUrl: './edit-challenge.component.html',
  styleUrls: ['./edit-challenge.component.scss']
})
export class EditChallengeComponent implements OnInit {

  public editForm: FormGroup;
  challengeRef: any

  constructor(
    public challengeService: ChallengeService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.challengeService.getChallengeDoc(id).subscribe(res => {
      this.challengeRef = res;
      this.editForm = this.formBuilder.group({
        title: [this.challengeRef.name],
        description: [this.challengeRef.email],
        category: [this.challengeRef.contact]
      })
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');

    this.challengeService.updateChallenge(this.editForm.value, id);
    this.router.navigate(['list-challenges']);
  };


}
