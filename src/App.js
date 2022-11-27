import "./App.css";
import { db } from "./firebase-config";
import { collection, doc, getDocs, query, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [test, setTest] = useState([]);
  const [data, setData] = useState([]);
  const [testId, setTestId] = useState("");

  const testRef = collection(db, "test");

  useEffect(() => {
    const getTest = async () => {
      const data = await getDocs(testRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTest();
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const getData = async (id) => {
    console.log(id);
    const docRef = doc(db, "test", id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    setData(docSnap.data());
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="Name..."
          {...register("name")}
          value={data.name}
        />
        <input
          type="number"
          placeholder="Age..."
          {...register("age")}
          value={data.age}
        />
        <input type="submit" />
      </form>
      {test.map((doc) => {
        return (
          <div>
            <h3>{doc.name + " " + doc.age}</h3>
            <button onClick={() => getData(doc.id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
