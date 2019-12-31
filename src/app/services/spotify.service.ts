import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA2Tz-FBQLIqwRg3EiNA3pRYupRsLCaREsA6za5sppFlBrTIwOZRKHlVMyZkeKmCLYcIpR-kaxI8VTd3k4'
    })

    return this.http.get(url, {headers})
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(
        map(data => {
          return data['albums'].items
        })
      )
  }

  getArtist(term: string){
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(
        map(data =>{
          return data['artists'].items
        })
      )


  }
}
