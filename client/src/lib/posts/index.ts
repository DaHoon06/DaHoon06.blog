import * as fs from "fs";

const postDirectory = require('../../../posts/test.md');

const getAllPostsIds = () => {
  const fileNames = fs.readdirSync(postDirectory)
  console.log(fileNames);

  return fileNames.map((fileName) => {
      return (
        {
          params: {
            id: fileName.replace(/\.md$/, ''),
          }
        }
      )
  })
}

export default getAllPostsIds();
