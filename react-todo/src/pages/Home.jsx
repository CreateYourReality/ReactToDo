import { useEffect, useState } from "react";

const Home = () => {
    const [data,setData] = useState([]);
    const [input, setInput] = useState("");
    const [checked, setChecked] = useState([]);

    const addToDo = (event) => {
        event.preventDefault();
        setData([...data, input]);
        setChecked([...checked,false]);
    }
    
    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const deleteMe = (index) => {
        let newArray = [...data];
        newArray.splice(index,1);
        setData(newArray);
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
            <nav>
                <h1>TODO</h1>
            </nav>

            <article>
                {data.map((item,index) => (
                    <div key={index} className="todo-item">
                        <input onChange={() => handleVisuals(index)} type="checkbox" />
                        <p className={checked[index]?"visuals":""}>{item}</p>
                        <a onClick={() => deleteMe(index)}>DELETE</a>
                    </div>
                ))
                }

                <form >
                    <input onChange={handleInput} type="text" />
                    <input onClick={addToDo} type="submit" value="Submit"/>
                </form>
            </article>
        </section>
     );
}
 
export default Home;