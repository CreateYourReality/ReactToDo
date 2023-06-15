import { useEffect, useState } from "react";
import Header from "../components/Header";

const Home = () => {
    const [data,setData] = useState([]);
    const [input, setInput] = useState("");
    const [checked, setChecked] = useState([]);

    const addToDo = (event) => {
        event.preventDefault()
        if(input == "" || input.value == "")
            return;

        setData([...data, input.value]);
        setChecked([...checked,false]);
        input.value = ""
    }
    
    const handleInput = (event) => {
        setInput(event.target);
    }

    const deleteMe = (index) => {
       
        setData((prev) => {
            prev.splice(index,1);
            return [...prev]
        });
        setChecked((prev) => {
            prev.splice(index,1);
            return [...prev]
        });
    }

    const handleVisuals = (index) => {
        let newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    }

    useEffect(() => {
        console.log("NEW");
    }, [data])

    return ( 
        <section>
           <Header/>
            <article>
                {data.map((item,index) => (
                    <div key={index} className="todo-item">
                        <input checked={checked[index]? true : false} onChange={() => handleVisuals(index)} type="checkbox" />
                        <p className={checked[index]?"visuals":""}>{item}</p>
                        <a onClick={() => deleteMe(index)}>DELETE</a>
                    </div>
                ))
                }

                <form >
                    <input autoFocus onChange={handleInput} type="text" />
                    <input onClick={addToDo} type="submit" value="Submit"/>
                </form>
            </article>
        </section>
     );
}
 
export default Home;