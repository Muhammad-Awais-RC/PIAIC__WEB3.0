type AlbumObj ={
  artistName: string,
  albumName: string,
  tracks?: number,
}

// function makeAlbum(artistName: string, albumName: string, tracks: number = 0): AlbumObj {
  
//   if (tracks) {
//     return { 
//       artistName,
//       albumName,
//       tracks,
//     }
//   } 

//   return {
//     artistName,
//     albumName,
//   }
// }

let makeAlbum = (artistName: string, albumName: string, tracks: number = 0): AlbumObj =>
  tracks ? { artistName , albumName , tracks } : {artistName ,albumName} 

console.log(makeAlbum("Artist Name", "Album Name"))
console.log( makeAlbum("Artist Name" , "Album Name") )
console.log( makeAlbum("Artist Name" , "Album Name" , 12) )


