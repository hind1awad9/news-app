import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/post.service';
import Post from './Post.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  styles =
    { shortContentDisplay: 'none', longContentDisplay: 'block', dateAndTimeDisplay: 'none', imageDisplay: 'block', cardDisplay: 'block' }
  stylesSmall = { shortContentDisplay: 'none', longContentDisplay: 'block', dateAndTimeDisplay: 'none', imageDisplay: 'block', cardDisplay: 'block', titleDisplay: 'none', authorDisplay: 'none', imageWidth: '100%', imageHeight: "150px" }
  stylesSmallMediaNone = { dateDisplayTrending: "block", dateAndTimeDisplay: 'none', dateDisplay: 'none', shortContentDisplay: 'block', longContentDisplay: 'none', mediaDisplay: 'none', imageDisplay: 'block', cardDisplay: 'block', titleDisplay: 'none', authorDisplay: 'none', imageWidth: '100%', imageHeight: "150px" }
  stylesImageNone = { dateDisplayTrending: "block", dateAndTimeDisplay: 'none', dateDisplay: 'none', shortContentDisplay: 'block', longContentDisplay: 'none', mediaDisplay: 'none', imageDisplay: 'none', cardDisplay: 'block', titleDisplay: 'none', authorDisplay: 'none', imageWidth: '100%', imageHeight: "150px" }

  stylesInline = { shortContentDisplay: 'block', longContentDisplay: 'none', dateandTimeDisplay: 'none', dateDisplay: 'block', mediaDisplay: 'none', imageDisplay: 'left', authorMargin: '0', imageMargin: '1.5em', cardDisplay: 'inline-block', cardWidth: '65%', titleDisplay: 'block', titleSize: '1em', authorDisplay: 'block', imageWidth: '20%', imageHeight: "140px" }
  stylesInlineLeft = {dateDisplay:'none', shortContentDisplay: 'block', longContentDisplay: 'none', dateAndTimeDisplay: 'block', categoryDisplay: 'none', mediaDisplay: 'none', imageDisplay: 'left', authorMargin: '0', imageMargin: '1em', cardDisplay: 'inline-block', cardWidth: '50%', titleDisplay: 'none', authorDisplay: 'none', imageWidth: '40%', imageHeight: "100px" }
  recentPosts: Array<Post> = new Array<Post>();
  popularPosts: Array<Post>;
  trendingTopPost: Array<Post>;
  trendingPosts: Array<Post>;
  editorsPicksPosts: Array<Post>;
  editorsPickPostsOne: Array<Post>;
  latestNews: Array<Post> = new Array<Post>();
  mainLatestNews: any
  subLatestNews: any
  constructor(private postService: HomeService) { }

  ngOnInit() {

    // Latest News 
    this.postService.getLatestNews().subscribe(((response: any) => {
      this.latestNews = response.articles as Array<Post>;
      const [main, ...rest] = this.latestNews;
      this.mainLatestNews = main;
      this.subLatestNews = rest;
    }))

    // Recent News.
    this.postService.getRecentPosts().subscribe(((response: any) => {
      this.recentPosts = response.articles as Array<Post>;
    }))

    // Popular News.
    this.postService.getPopularPosts().subscribe(((response: any) => {
      this.popularPosts = response.articles as Array<Post>;
    }))

    // Trending top News.
    this.postService.getTrendingTopPost("top-headlines").subscribe(((response: any) => {
      this.trendingTopPost = response.articles as Array<Post>;
    }))
    // Trending News.
    this.postService.getTrendingPosts().subscribe(((response: any) => {
      this.trendingPosts = response.articles as Array<Post>;
    }))

    // Editors Picks News.
    this.postService.getEditorsPicksPosts().subscribe(((response: any) => {
      this.editorsPicksPosts = response.articles as Array<Post>;
    }))


    

  }

}
