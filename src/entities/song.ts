import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import PlaylistSongs from "./playlistSongs.entity";

@Entity("songs")
class Songs {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 60 })
  artist: string;

  @Column({ type: "integer" })
  duration: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PlaylistSongs, (playlistSongs) => playlistSongs.song)
  playlistsSongs: PlaylistSongs[];
}

export default Songs;
