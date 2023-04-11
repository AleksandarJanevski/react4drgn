import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { staffAction } from "../redux/actions/StaffActions";
import { Dropdown } from "./Dropdown";
import { Table } from "./Table";
import { nodeApi } from './../constants/api'

export const Form = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [position, setPosition] = useState("")
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [pickUp, setpickUp] = useState('')
    const [callTime, setcallTime] = useState('')
    const dispatch = useDispatch();
    const staff = useSelector(state => state.StaffReducer.staff);
    const [arr, setArr] = useState([]);
    const [a, setA] = useState([])
    const [search, setSearch] = useState('')
    const [all, setAll] = useState([])
    let [counter, setCounter] = useState(0)

    const section = [
        { name: "", value: undefined },
        { name: "AGENCY", value: "AGENCY", },
        { name: "PRODUCTION", value: "PRODUCTION" },
        { name: "DIRECTOR", value: "DIRECTOR" },
        { name: "AD's", value: "AD's" },
        { name: "CAMERA", value: "CAMERA" },
        { name: "LIGHTING", value: "LIGHTING" },
        { name: "GRIP", value: "GRIP" },
        { name: "SFX", value: "SFX" },
        { name: "VFX", value: "VFX" },
        { name: "HEALTH AND SAFETY", value: "HEALTH AND SAFETY" },
        { name: "ART DEPARTMENT", value: "ART DEPARTMENT" }
    ]
    const agency = [
        { name: "", value: undefined },
        { name: "Producer", value: "Producer" },
        { name: "Creative Director", value: "Creative Director" }

    ]
    const production = [
        { name: "", value: undefined },
        { value: "Producer", name: "Producer" },
        { value: "Line Producer", name: "Line Producer" },
        { value: "UPM", name: "UPM" },
        { value: "Prod.Coord.", name: "Prod.Coord." },
        { value: "Prod. Assistant", name: "Prod. Assistant" },
        { value: "Prod. Runner", name: "Prod. Runner" },
    ]
    const director = [
        { name: "", value: undefined },
        { value: "Director", name: "Director" },
    ]
    const ads = [
        { name: "", value: undefined },
        { value: "1st AD", name: "1st AD" },
        { value: "2nd AD", name: "2nd AD" },
        { value: "3rd AD", name: "3rd AD" },
        { value: "4th AD", name: "4th AD" },
        { value: "5th AD", name: "5th AD" },
        { value: "6th AD", name: "6th AD" },
        { value: "7th AD", name: "7th AD" },
        { value: "8th AD", name: "8th AD" },
    ]
    const camera = [
        { name: "", value: undefined },
        { value: "DOP", name: "DOP" },
        { value: "1st AC", name: "1st AC" },
        { value: "2nd AC", name: "2nd AC" },
        { value: "3rd AC", name: "3rd AC" },
        { value: "4th AC", name: "4th AC" },
        { value: "Video Control", name: "Video Control" },
        { value: "Downloader", name: "Downloader" },
        { value: "DIT", name: "DIT" },
        { value: "BTS", name: "BTS" },
        { value: "BTS Video", name: "BTS Video" },
    ]
    const lighting = [
        { name: "", value: undefined },
        { value: "Gaffer", name: "Gaffer" },
        { value: "Electrician", name: "Electrician" },
        { value: "Board Operator", name: "Board Operator" },
    ]
    const grip = [
        { name: "", value: undefined },
        { value: "Key Grip", name: "Key Grip" },
        { value: "Bolt Technician", name: "Bolt Technician" },
        { value: "Bolt Grip", name: "Bolt Grip" },
    ]
    const sfx = [
        { name: "", value: undefined },
        { value: "SFX Technician", name: "SFX Technician" },
    ]
    const vfx = [
        { name: "", value: undefined },
        { value: "VFX Supervisor", name: "VFX Supervisor" },
    ]
    const healthAndSafety = [
        { name: "", value: undefined },
        { value: "Medic on Set", name: "Medic on Set" },
    ]
    const artDepartment = [
        { name: "", value: undefined },
        { value: "Production Designer", name: "Production Designer" },
        { value: "Art Director", name: "Art Director" },
        { value: "Coordinator", name: "Coordinator" },
        { value: "Art Director's Assistant", name: "Art Director's Assistant" },
        { value: "Construction Manager", name: "Construction Manager" },
        { value: "Props On Set", name: "Props On Set" },
        { value: "Set Decorator", name: "Set Decorator" },
        { value: "Set Dressing on Set", name: "Set Dressing on Set" },
        { value: "Computer Technician", name: "Computer Technician" },
        { value: "Buyer", name: "Buyer" },
    ]

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/table-session`)
            const jsonResult = await result.json();
            setArr(jsonResult);
            console.log(jsonResult);
        }
        fetchData();
        const fetchAll = async () => {
            const result = await fetch(`http://localhost:8000/table-all`)
            const jsonResult = await result.json();
            setAll(jsonResult);
            console.log(jsonResult);
        }
        fetchAll();
    }, [])

    const searchStaff = async () => {
        all.forEach(element => {
            element.staff.forEach(item => {
                if (item.name === search) {
                    setCounter(counter += 1)
                }
            })
        })
    }

    const submitSession = async () => {
        const data = { content: staff }

        const result = await fetch('http://localhost:8000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resultInJson = await result.json()
        setA([...a, resultInJson]);
    }
    const submitAll = async () => {
        const data = { content: staff }

        const result = await fetch('http://localhost:8000/finish-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resultInJson = await result.json()
        setA([...a, resultInJson]);
    }

    const submitFunction = (e) => {
        e.preventDefault();
        let data = {
            section: selectedValue,
            position: position,
            name: name,
            contact: contact,
            pickUp: pickUp,
            callTime: callTime
        };
        setArr([...arr, data]);
    };

    return (
        <div>
            <form action="/form" method="post">
                <label id="label" htmlFor="section">Section</label>
                {<Dropdown elements={section} value={selectedValue} ime="section" ids="section" onChange={(e) => { setSelectedValue(e.target.value) }} />}
                {selectedValue === "AGENCY" ? <Dropdown elements={agency} ime="agency" id="agency" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "PRODUCTION" ? <Dropdown elements={production} ime="production" id="production" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "DIRECTOR" ? <Dropdown elements={director} ime="director" id="director" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "AD's" ? <Dropdown elements={ads} ime="ads" id="ads" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "LIGHTING" ? <Dropdown elements={lighting} ime="lighting" id="lighting" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "GRIP" ? <Dropdown elements={grip} ime="grip" id="grip" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "HEALTH AND SAFETY" ? <Dropdown elements={healthAndSafety} ime="healthAndSafety" id="healthAndSafety" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "CAMERA" ? <Dropdown elements={camera} ime="camera" id="camera" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "SFX" ? <Dropdown elements={sfx} ime="sfx" id="sfx" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "VFX" ? <Dropdown elements={vfx} ime="vfx" id="vfx" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                {selectedValue === "ART DEPARTMENT" ? <Dropdown elements={artDepartment} ime="artDepartment" id="artDepartment" onChange={(e) => { setPosition(e.target.value) }} /> : null}
                <input type="text" value={name} name="name" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" /> <br />
                <input type="text" value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder="Contact" /> <br />
                <input type="time" name="pickUp" placeholder="Pick Up" value={pickUp} onChange={(event) => setpickUp(event.target.value)} /><br />
                <input type="time" name="callTime" placeholder="Call Time" value={callTime} onChange={(event) => setcallTime(event.target.value)} /> <br />
                <button onClick={submitFunction} type="button">Submit</button>


            </form>
            <button onClick={submitAll}>End Project</button>
            <button onClick={submitSession}>Finish Project</button><hr />

            <input type="text" name="serach" value={search} onChange={(e) => (setSearch(e.target.value))} />
            <button onClick={searchStaff}>Search</button><hr />
            <p>The name you searched for is repeated:{counter} times</p><hr />


            <button onClick={() => { dispatch(staffAction(arr)) }}>send to reducers</button>
            <Table array={arr} /> <hr />


        </div>
    )
}