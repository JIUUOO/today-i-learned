/**
 * 프로미스
 */

// reject로 실패 이유 전달
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20); // 결과값 20 전달
    // reject("~~ 때문에 실패");
  }, 3000);
}); // 실행자 함수 인자로 전달

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  // return new Promise<Post>((resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
