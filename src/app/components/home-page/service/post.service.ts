import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Post from '../Post.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  static post: Post
  posts: Array<Post>
  URL = environment.url;
  API_KEY = environment.apiKey;
  END_POINT = 'everything';

  constructor(private httpClient: HttpClient) {

  }

  /**
   * Request for Latest Posted News.
   * @method GET
   * @param endPoint @example 'everything' or 'top-headlines'
   */
  getLatestNews(endPoint?) {
    const q = 'Technology'
    const pageSize = '3'
    const sortBy = 'publishedAt'
    this.END_POINT = endPoint || 'everything';
    return this.httpClient.get(`${this.URL}${this.END_POINT}?q=${q}&sortBy=${sortBy}&pageSize=${pageSize}${this.API_KEY}`)
  }

  /**
   * Request For Recenely Posted News.
   * @method GET
   * @param endPoint @example 'everything' or 'top-headlines'
   */
  getRecentPosts(endPoint?) {
    const q = 'technology'
    const pageSize = '5'
    const sortBy = 'publishedAt'
    this.END_POINT = endPoint || 'everything';
    return this.httpClient.get(`${this.URL}${this.END_POINT}?q=${q}&sortBy=${sortBy}&pageSize=${pageSize}${this.API_KEY}`)
  }

  /**
   * Request for Popular News.
   * @method GET
   * @param endPoint @example 'everything' or 'top-headlines'
   */
  getPopularPosts(endPoint?) {
    const q = 'technology'
    const pageSize = '5'
    const sortBy = 'popularity'
    this.END_POINT = endPoint || 'everything';
    return this.httpClient.get(`${this.URL}${this.END_POINT}?q=${q}&sortBy=${sortBy}&pageSize=${pageSize}${this.API_KEY}`)
  }
  /**
   * Request for Trending News.
   * @method GET
   * @param endPoint @example 'everything' or 'top-headlines'
   */
  getTrendingPosts(endPoint?) {
    const q = 'trending'
    const pageSize = '5'
    const sortBy = 'publishedAt'
    this.END_POINT = endPoint || 'everything';
    return this.httpClient.get(`${this.URL}${this.END_POINT}?q=${q}&sortBy=${sortBy}&pageSize=${pageSize}${this.API_KEY}`)
  }
  /**
   * Request for Trending News.
   * @method GET
   * @param endPoint @example 'everything' or 'top-headlines'
   */
  getTrendingTopPost(endPoint?) {
    const q = 'trending'
    const pageSize = '1'
    const sortBy = 'publishedAt'
    this.END_POINT = endPoint || 'everything';
    return this.httpClient.get(`${this.URL}${this.END_POINT}?q=${q}&sortBy=${sortBy}&pageSize=${pageSize}${this.API_KEY}`)
  }
  /**
   * Request for editors picks News.
   * @method GET
   * @param endPoint @example 'everything' or 'top-headlines'
   */
  getEditorsPicksPosts(endPoint?) {
    const q = 'editor'
    const pageSize = '5'
    // const sortBy = 'popularity'
    this.END_POINT = endPoint || 'everything';
    return this.httpClient.get(`${this.URL}${this.END_POINT}?q=${q}&pageSize=${pageSize}${this.API_KEY}`)
  }
}
