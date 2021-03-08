import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Wells from '../components/well';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar1';
// import { Navbar } from 'react-bootstrap';

function WellsAndStages(props) {
    const [noOfWells, setnoOfWells] = useState(0)
    const [noOfStages, setnoOfStages] = useState(0)
    const [wells, setWells] = useState([])
    const [selectedFile, setFile] = useState(null)
    // const [noOfStages, setnoOfStages] = useState([])

    const handleSubmit = (e) => {
        e.preventDerfault();
    }

    useEffect(() => {
        // let  = Array.from({length: noOfWells}, (v, i) => ({time:"",inj:"",visc:"",density:"",timeStep:"",carter:"",compressibility:""}))
        let stages = Array.from({ length: noOfStages ? noOfStages : props.stageNumber }, (v, i) => ({ tableData: [], pumpingTime: 0 }))
        let wells = Array.from({ length: noOfWells }, (v, i) => (stages))
        if (noOfWells) {
            props.setWells(wells)
        }
    }, [noOfStages, noOfWells])
    return (
        <div> <NavBar />

            <div className="main-container" >    
            
                <div className=" d-flex justify-content-center p-4" >
                    <form className='form-container d-flex flex-column' >
                    
                        <form class="form-inline">
                            <div class="form-group">
                                <label for="">No of wells</label>
                                <input
                                    type="number"
                                    id="noOfWells"
                                    class="form-control mx-sm-3"
                                    required
                                    value={noOfWells ? noOfWells : props.wellNumber}
                                    onChange={(e) => setnoOfWells(e.target.value)}
                                />
                            </div>
                        </form>
                        <br />
                        <form class="form-inline">
                            <div class="form-group">
                                <label for="">No of Stages</label>
                                <input
                                    type="number"
                                    id="noOfStages"
                                    class="form-control mx-sm-3"
                                    required
                                    value={noOfStages ? noOfStages : props.stageNumber}
                                    onChange={(e) => setnoOfStages(e.target.value)}
                                />
                            </div>
                        </form>
                    </form>
                </div>
                <Wells />

                <div className=" d-flex justify-content-center">
                    <button className="btn btn-primary m-4 px-5"
                        onClick={
                            async e => {
                                let dataToSubmit = false
                                await props.wells.map(well => {
                                    return well.map(stage => {
                                        if (!stage.tableData.length) {
                                            dataToSubmit = true
                                        }
                                    })
                                })
                                if (dataToSubmit) {
                                    toast.error("No Data to submit")
                                }
                                else {

                                    let showToast = true
                                    let textFileData = ''
                                    await props.wells.map((well, stgInd) => {
                                        return well.map((stage, stgNo) => {
                                            textFileData = textFileData + '*************************************************************' + '\n' +
                                                'Pumping Schedule for Stage-' + (stgNo + 1) + '\n' +
                                                '___________________________________' + '\n' +
                                                'Schedule divisions' + '\n' +
                                                stage.tableData.length + '\n' +
                                                '*************************************************************' + '\n' +
                                                'Total Pumping Time (min)' + '\n' +
                                                stage.pumpingTime + '\n' +
                                                '*************************************************************' + '\n' +
                                                'Input time (cumulative), all parameters seperated by commas.' + '\n' +
                                                '*************************************************************' + '\n' +
                                                'To simulate shut-in use zero injection rate.' + '\n' +
                                                '*************************************************************' + '\n' +
                                                'Time (min),Injection rate (bpm),Viscosity (cP),density of injection fluid (lb/gal),fluid time step during shut-in (sec),carter Leak-off-coefficient (m/s^0.5),fluid compressibility (1/Pa)' + '\n' +
                                                '*************************************************************' + '\n'
                                            return stage.tableData.map((obj, tableInd) => {
                                                if (obj.time && obj.inj && obj.visc && obj.density && obj.timeStep && obj.carter && obj.compressibility) {
                                                    textFileData = textFileData + obj.time + ',' + obj.inj + ',' + obj.visc + ',' + obj.density + ',' + obj.timeStep + ',' + obj.carter + ',' + obj.compressibility +
                                                        '\n' + ((tableInd === (stage.tableData.length - 1)) ? ('*************************************************************' + (((stgNo === (well.length - 1)) ? ((stgInd !== (props.wells.length - 1)) ? '\n\n\n' : "") : '\n\n'))) : "")
                                                } else {
                                                    showToast = false
                                                }
                                            })
                                        })
                                    })
                                    if (!showToast) {

                                        toast.error("All fields should be filled")
                                    } else {
                                        const element = document.createElement("a");
                                        const file = new Blob([
                                            textFileData
                                        ], { type: 'text/plain' });
                                        element.href = URL.createObjectURL(file);
                                        element.download = "myFile.txt";
                                        document.body.appendChild(element); // Required for this to work in FireFox
                                        element.click();
                                    }
                                }


                            }
                        }
                    >Submit</button>
                    &nbsp;
                    <button className="btn btn-primary m-4 px-4" style={{ position: "relative", overflow: "hidden" }}>
                        <input type="file" name="" id="" accept=".txt" value={selectedFile}
                            onChange={
                                e => {
                                    var file = e.target.files[0]
                                    var textType = /text.*/;
                                    if (file && file.type.match(textType)) {
                                        const reader = new FileReader()
                                        reader.onload = async e => {
                                            const text = reader.result
                                            // console.log(
                                            // let textMatch = text.substr(0,61) === "*************************************************************"

                                            try {
                                                props.setWells([])
                                                props.setNums({
                                                    wellNumber: 0,
                                                    stageNumber: 0,
                                                })
                                                setnoOfStages(0)
                                                setnoOfWells(0)
                                                let parseArr = text.split('\n').map((v, index) => {
                                                    if (!v.trim()) {
                                                        return '-LN-'
                                                    } else {
                                                        return v.trim() + ((index !== (text.split('\n').length - 1)) ? '-END-' : '')
                                                    }
                                                }).join("").split("-LN--LN-")

                                                parseArr = parseArr.map(well => {
                                                    
                                                    return well.split("-LN-").map(v => v.split("-END-")).map((v, wellI) => {
                                                        console.log(well.split("-LN-").map(v => v.split("*************************************************************")).filter((v, wellI1) => (wellI == wellI1)).map(v => v.map(v1=>v1.split("-END-").join(""))))
                                                        let noStage = parseArr[0].split("-LN-").length
                                                        console.log("2 lines check",noStage)
                                                        parseArr.map(w=>{
                                                            if(w.split("-LN-").length!==noStage){
                                                                throw "Unsupported"
                                                            }
                                                        })
                                                        if(
                                                            v[0]!=="*************************************************************"
                                                            || v[1].substring(0,v[1].length - 1) !== "Pumping Schedule for Stage-"
                                                            || v[2] !== "___________________________________"
                                                            || v[3] !== "Schedule divisions"
                                                            || v[5] !== "*************************************************************"
                                                            || v[6] !== "Total Pumping Time (min)"
                                                            || v[8] !== "*************************************************************"
                                                            || v[9] !== "Input time (cumulative), all parameters seperated by commas."
                                                            || v[10] !== "*************************************************************"
                                                            || v[11] !== "To simulate shut-in use zero injection rate."
                                                            || v[12] !== "*************************************************************"
                                                            || v[13] !== "Time (min),Injection rate (bpm),Viscosity (cP),density of injection fluid (lb/gal),fluid time step during shut-in (sec),carter Leak-off-coefficient (m/s^0.5),fluid compressibility (1/Pa)"
                                                            || v[14] !== "*************************************************************"
                                                            || well.split("-LN-").map(v => v.split("*************************************************************")).filter((v, wellI1) => (wellI == wellI1)).map(v => v.map(v1=>v1.split("-END-").join("")))[0].length>8
                                                            ){
                                                            throw "Unsupported"
                                                        }
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[0])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[1].substring(0,v[1].length - 1))
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[2])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[3])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[4])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[5])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[6])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[7])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log(v[8])
                                                        console.log(v[9])
                                                        console.log(v[10])
                                                        console.log(v[11])
                                                        console.log(v[12])
                                                        console.log(v[13])
                                                        console.log(v[14])
                                                        console.log(v[15])
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log("]]]]]]]]]]]]]]]]]]]")
                                                        console.log("]]]]]]]]]]]]]]]]]]]")

                                                        return {
                                                        pumpingTime: v[7],
                                                        tableData: well.split("-LN-").map(v => v.split("*************************************************************")).filter((v, wellI1) => (wellI == wellI1)).map(v => v[6].split("-END-").filter(v => v).map(v => {
                                                            let data = v.split(",")
                                                            return { time: data[0], inj: data[1], visc: data[2], density: data[3], timeStep: data[4], carter: data[5], compressibility: data[6] }
                                                        }))[0]
                                                    }})
                                                })

                                                props.setWells(parseArr)
                                                props.setNums({
                                                    wellNumber: parseArr.length,
                                                    stageNumber: parseArr[0].length,
                                                })

                                            } catch {
                                                toast.error("Non readable file format")
                                            }

                                            // setnoOfStages(parseArr[0].length)
                                            // setnoOfWells(parseArr.length)
                                        }
                                        reader.readAsText(file)
                                        setFile("")

                                    }
                                }
                            }
                            style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", opacity: "0" }} />
                        Read from file</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wells: state.wells,
        wellNumber: state.wellNumber,
        stageNumber: state.stageNumber,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setWells: (userObject) => {
            dispatch({ type: "SET_WELLS", payload: userObject })
        },
        setNums: (userObject) => {
            dispatch({ type: "SET_NUMBERS", payload: userObject })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WellsAndStages)
