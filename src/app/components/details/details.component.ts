import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home-page/service/post.service';
import PostComment from '../home-page/IComment';
import Post from '../home-page/Post.model';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isShown: boolean = false;
  post: Post = HomeService.post;
  submitForm: FormGroup;
  constructor(private formBulider: FormBuilder, private router: Router) {
  }
  ngOnInit() {
    //return to home page if no Post.
    if (!this.post)
      return this.router.navigateByUrl('/');
if(!this.post.comments || this.post.comments && this.post.comments.length == 0)
this.post.comments = new Array<PostComment>();

    this.submitForm = this.formBulider.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });

  }

  submitComment() {
    let name = this.submitForm.get('name').value;
    let email = this.submitForm.get('email').value;
    let message = this.submitForm.get('message').value;
    let createdAt = new Date();
    let comment: PostComment = { name, email, message, createdAt };
    this.post.comments.push(comment);
    this.resetCommentInputs();
  }

  // Set Comment Inputs to be empty.
  resetCommentInputs() {
    this.submitForm.get('name').setValue('');
    this.submitForm.get('email').setValue('');
    this.submitForm.get('message').setValue('');
  }
}
