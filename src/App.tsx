import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala, galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto para meu portfólio. É um projeto que não faz nada, só subi pq tava afim.",
      },
      { type: "link", content: "https://github.com/diego3g/new-project" },
    ],
    publishedAt: new Date("2022-05-03, 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/murilojssilva.png",
      name: "murilojssilva",
      role: "Aluno",
    },
    content: [
      { type: "paragraph", content: "Boa noite, pessoal." },
      {
        type: "paragraph",
        content:
          "Acabei de subir um novo conteúdo. A quem interessar possa, segue o link.",
      },
      { type: "link", content: "https://github.com/murilojssilva/new-project" },
    ],
    publishedAt: new Date("2022-05-10, 12:00:00"),
  },
];

export function App() {
  return (
    <>
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
    </>
  );
}
