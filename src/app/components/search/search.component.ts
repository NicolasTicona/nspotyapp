import { NoimagePipe } from '../../pipes/noimage.pipe';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = []
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { 
    
  }

  ngOnInit() {
  }

  search(term: string){
    // console.log(term)
    this.loading = true;
    this.spotifyService.getArtist(term)
      .subscribe(data => {
        this.artists = data
        this.loading = false;
      })
  }

}
