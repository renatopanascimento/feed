import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/renatopanascimento.png",
      name: "Renato Pessoa",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. O projeto em questão trata de uma plataforma para gerar playlists de acordo com as músicas tocadas no último show da banda escolhida.",
      },
      { type: "link", content: "festivalist.com" },
    ],
    publishedAt: new Date("2023-04-29 22:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/leonardoboulitreau.png",
      name: "Leonardo Boulitreau",
      role: "AI Developer",
    },
    content: [
      { type: "paragraph", content: "Contratação 🎉" },
      {
        type: "paragraph",
        content:
          "Acabei de ser contratado como pesquisador na empresa CPQD e gostaria muito de compartilhar minha felicidade com vocês!!",
      },
      { type: "link", content: "cpqd.com.br/" },
    ],
    publishedAt: new Date("2023-04-30 22:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
