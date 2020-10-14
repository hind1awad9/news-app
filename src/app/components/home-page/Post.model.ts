import IPost from "./Ipost"
import PostComment from "./IComment"
export default class Post implements IPost {
    comments: Array<PostComment>;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}