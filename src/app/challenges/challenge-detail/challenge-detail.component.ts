import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../models/challenge.model';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { __classPrivateFieldSet } from 'tslib';


@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class ChallengesDetailComponent implements OnInit {
  public challenge: Challenge;
  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public vote: Challenge;

  constructor(
    private challengeService: ChallengeService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    ) { }

  @Input() titleChallenge: string;
  @Input() descriptionChallenge: string;
  @Input() categoryChallenge: string;
  @Input() locationChallenge: string;
  @Input() setterChallenge: string;
  @Input() dateChallenge: string;
  @Input() socialpointsChallenge: string;
  @Input() votesChallenge: string;
  @Input() id: string;
  @Input() statusvotesChallenge: string;
  @Input() contactmail: string;

  ngOnInit(): void {
    const challengeId: string = this.route.snapshot.paramMap.get('id');
    this.challengeService.getChallengeDetail(challengeId).subscribe(challenge => {
      this.challenge = challenge;
    });
    this.chooseCategory();
  }

  chooseCategory(){
   var nameCategory = document.getElementById('nattiscategory').innerHTML;
   console.log(nameCategory);

   if (nameCategory === 'Barrierefreiheit'){
     document.getElementById('wrapper-category').className = 'category category-barrierefrei';
   }
   if (nameCategory === 'Umwelt'){
     document.getElementById('wrapper-category').className = 'category category-klima';
   }
   else{
     document.getElementById('wrapper-category').className = 'category category-vandalismus';
   }
   console.log(nameCategory);
  }

//Next steps: element per ID aufrufen, Inhalt der ID lesen und je nach ID andere Klasse auslesen
  chooseCategorybyID(){
    var nameCategory = document.getElementById('nattiscategory').innerHTML;
    console.log(nameCategory);

    if (nameCategory === 'Barrierefreiheit'){
      document.getElementById('wrapper-category').className = 'category category-barrierefrei';
    }
    if (nameCategory === 'Umwelt'){
      document.getElementById('wrapper-category').className = 'category category-klima';
    }
    else{
      document.getElementById('wrapper-category').className = 'category category-vandalismus';
    }
  }

  upvote(element){
    var res2;
    this.challengeService.getChallengeDog(this.id).subscribe((res) => {
      res2 = res.data();
      this.vote = res2;

      if(this.vote.statusvotes=='vote'){
        this.vote.votes++;
        this.vote.statusvotes = 'gevotet ??????';

      }else{
        this.vote.votes--;
        this.vote.statusvotes = 'vote';

      };
    this.challengeService.updateVotes(this.vote, element, this.id);

    //console.log("letztes update" + element.target.classList);
    })

  }
}
