interface propsTeacher {
  teachersName: string;
  teacherFunnyBecause: string;
  iLikeBecause: string;
  pictureFileName: string;
}

function Teacher(props: propsTeacher) {
  const imgName: string = "./src/assets/" + props.pictureFileName;

  return (
    <>
      <p>
        My teacher called {props.teachersName} is funny because{" "}
        {props.teacherFunnyBecause}. The thing I like most about this teacher is{" "}
        {props.iLikeBecause}
      </p>
      <img src={imgName} alt="image not found" />
    </>
  );
}

export default Teacher;
