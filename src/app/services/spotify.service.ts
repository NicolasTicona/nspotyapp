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
      'Authorization': 'Bearer BQAwTGHVnqHHaM0BYT2GOAREyZ4McHEumJEXNWkK78FGxSvEMB_n3njvz5QSGrscfZfWDB4SRBf4mYG6e8g'
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

  getArtists(term: string){
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(
        map(data =>{
          return data['artists'].items
        })
      )
  }

  getArtist(id: string){
    return this.getQuery(`artists/${id}`)
  }
  
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(
        map(data => {
          return data['tracks']
        })
      )
  }
}
