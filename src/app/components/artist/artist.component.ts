import { DomseguroPipe } from './../../pipes/domseguro.pipe';
import { NoimagePipe } from './../../pipes/noimage.pipe';

import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;
  topTracks: any = [];

  constructor(private router: ActivatedRoute,
            private spotifyService: SpotifyService) { 
              this.loading = true;
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.getArtist(params['id'])
      this.getTopTracks(params['id'])
    })
  }

  getArtist(id: string){
    this.spotifyService.getArtist(id)
      .subscribe(resp => {
        this.artist = resp;
        this.loading = false;
      })
  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks(id)
      .subscribe(resp => {
        console.log(resp)
        this.topTracks = resp;
      })
  }

}
