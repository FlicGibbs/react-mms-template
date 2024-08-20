import Teacher from "../components/Teacher";

function Teachers() {
  return (
    <>
      <h1>Teachers</h1>
      <div className="well well-sm">
        We have lots of teachers at our school. They are all special in their
        own way ...
      </div>
      <br />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 card">
            <Teacher
              teachersName="Jimmy Jack"
              teacherFunnyBecause="he has pink hair"
              iLikeBecause="he can do handstands"
              pictureFileName="handstand.jpeg"
            />
          </div>
          <div className="col-sm-4 card">
            <Teacher
              teachersName="Miss Molly"
              teacherFunnyBecause="she brings her 14 cats to school with her every day"
              iLikeBecause="she's kind to cats"
              pictureFileName="cats.jpeg"
            />
          </div>
          <div className="col-sm-4 card">
            <Teacher
              teachersName="Whipper Watt"
              teacherFunnyBecause="everytime someone comes in the room the teacher runs to the person and gives them a hug"
              iLikeBecause="the teacher always helps me"
              pictureFileName="hug.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Teachers;
