import { Binary } from '@angular/compiler';
import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { Post, SectionCommentary, CheckOneTopicHeaders, CheckOneCommentaries,
CheckOneFirstTopic, CheckOneEighthTopic, CheckOneFifthTopic, CheckOneFourthTopic,
CheckOneSecondTopic, CheckOneSixthTopic, CheckOneSeventhTopic, CheckOneThirdTopic,
IteratorArray, CommentBinaryForm,
CommentForm, BinaryForm, ConfirmComentary } from '../../models/index';

import { ChecklistService, AlertService, PostService } from '../../services/index';
import { ChecklistProductionComponent } from '../checklist-production/checklist-production.component';

@Component({
  selector: 'app-checklist-update',
  templateUrl: './checklist-update.component.html',
  styleUrls: ['./checklist-update.component.css'],
  providers: [ChecklistService, PostService, AlertService],
})
export class ChecklistUpdateComponent extends ChecklistProductionComponent implements OnInit {

  post: Post;
  loading = false;
  iteratorArray: Array<Object>= IteratorArray;
  topicHeaders: Array<string> = CheckOneTopicHeaders;
  commentaries: Array<SectionCommentary> = CheckOneCommentaries;
  super(
    postService: PostService,
    alertService: AlertService
  ) {}

  ngOnInit() {
    console.log('entrou!!');
  }

  onSubmit() {
      // Show questions and anwsers
      console.warn(this.iteratorArray);

      // Show commentaries for each section
      console.warn(this.commentaries);
  }

  isOtherQuestions (topic: number, question: number) {
    return (topic !== 6 && ( question !== 4 && question !== 5));
  }

  isRequiredQuestions(topic: number, question: number) {
    return (topic === 6 && ( question === 4 || question === 5));
  }

  isNotRequiredQuestions(topic: number, question: number) {
    return (topic === 6 && ( question >= 0 && question <= 3));
  }

  updatePost() {
      const jsonChecklistUpdate = JSON.stringify({
        'interatorArray': this.iteratorArray,
        'commentaries': this.commentaries
      });

      this.postService.updatePost(jsonChecklistUpdate).subscribe(
        result => console.log(result)
      );
    }

    getPosts() {
      this.postService.getPosts().subscribe(
        result => console.log(result)
      );
    }
}
