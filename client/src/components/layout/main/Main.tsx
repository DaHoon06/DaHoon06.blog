import { Categories } from "@components/categories/Categories";
import { PostContainer } from "@components/posts";
import styled from "@styles/layout/main.module.scss";

export const Main = () => {
  return (
    <main className={styled.main__container}>
      <Categories />
      <PostContainer />
    </main>
  )
}
