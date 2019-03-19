import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getSearch(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBcJYxGJoH_PbEW5m95kUTaEf_V3BVX3gFCtKT3kkz-livHS4fpJai9mgWiPXTa9NUV-jQbVZAM04K7IvNqr4HWriIZvyA9galeDvVAdy2wxMPwM-4scmUPozvEINBcc317ntnDlK8gnhuOyPPlmqyk0Mt32umOPlH7gg"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getSearch(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = `artists/${id}`;
    return this.getAlbum(query);
  }

}
