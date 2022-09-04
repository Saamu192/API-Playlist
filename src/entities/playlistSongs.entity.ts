import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import Palylist from "./playlist.entity";
import Songs from "./song";

@Entity("playlist_songs")
class PlaylistSongs {
  @PrimaryColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Palylist)
  playlist: Palylist;

  @ManyToOne(() => PlaylistSongs, { eager: true })
  song: Songs;
}

export default PlaylistSongs;
