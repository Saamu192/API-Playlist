import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import PlaylistSongs from "./playlistSongs.entity";
import User from "./users.entity";

@Entity("playlists")
class Palylist {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 45 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @OneToMany(() => PlaylistSongs, (playlistSongs) => playlistSongs.playlist)
  playlistSongs: PlaylistSongs[];
}

export default Palylist;
6;
