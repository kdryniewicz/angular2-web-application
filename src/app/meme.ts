export class Meme {
    title:string;
    author: string;
    imgPath: string;
    votes: number

    constructor(title:string,author: string,imgPath: string, votes?: number)
    {
        this.title = title;
        this.author = author;
        this.imgPath = imgPath;
        this.votes = votes || 0;
    }

    voteUp(){
		this.votes += 1;
		return false;
	}
	voteDown(){
		this.votes -=1;
		return false;
	}
}
