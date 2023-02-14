import Image from "next/image";

function ProgramDescription(props) {
    const { title, intensity, imgSrc, ex1, ex2, ex3, ex4, ex5, ex6 } = props;
    return (
      
      <div style={{marginTop: 40, marginBottom: 40, fontSize: 30, color: 'black',  width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
        <div style={{width: "60%", backgroundColor: "#F5F5F5", display: 'flex', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{margin: 10}}>
          {title}
        </p>
        <Image src={imgSrc} alt="Workout Picture" width={750} height={490}/>
        <p style={{margin: 10}}>Intensity {intensity}</p>
        <ul style={{margin: 10}}>
          <li>{ex1}</li>
          <li>{ex2}</li>
          <li>{ex3}</li>
          <li>{ex4}</li>
          <li>{ex5}</li>
          <li>{ex6}</li>
        </ul>
        </div>
      </div>
    );
  }
  
  export default ProgramDescription;