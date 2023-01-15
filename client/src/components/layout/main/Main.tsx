import { Profile } from "@components/profile/Profile";
import { PostContainer } from "@components/posts";
import styled from "@styles/layout/main.module.scss";

export const Main = () => {
  return (
    <main className={styled.main__container}>
      <Profile />
      <PostContainer />
    </main>
  )
}
