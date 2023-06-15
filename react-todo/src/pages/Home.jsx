import { useEffect, useState } from "react";

const Home = () => {
    const [data,setData] = useState([]);
    const [input, setInput] = useState("");
    const [checked, setChecked] = useState([]);

    const addToDo = (event) => {
        event.preventDefault()
        if(input == "" || input.value == "")
            return;

        event.preventDefault();
        setData([...data, input.value]);
        setChecked([...checked,false]);
        input.value = ""
    }
    
    const handleInput = (event) => {
        setInput(event.target);
    }

    const deleteMe = (index) => {
        let newArray = [...data];
        let newChecked = [...checked];
        newArray.splice(index,1);
        newChecked.splice(index,1);
        setData(newArray);
        setChecked(newChecked);
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
                        <input checked={checked[index]? true : false} onChange={() => handleVisuals(index)} type="checkbox" />
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