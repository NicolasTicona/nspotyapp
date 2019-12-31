import { NoimagePipe } from './../../pipes/noimage.pipe';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newSongs: any[] = []
  loading: boolean;
  error: boolean = false;
  error_message: string = "";

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {
    this.spotifyService.getNewReleases()
      .subscribe(data => {
        this.newSongs = data;
        this.loading = false;
      }, (error_servicio) => {
        this.error = true;
        this.loading = false;
        this.error_message = error_servicio.error.error.message
      })
  }

}
