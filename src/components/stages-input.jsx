import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function StagesInput(props) {
    const [state, setstate] = React.useState({ time: "", inj: "", visc: "", density: "", timeStep: "", carter: "", compressibility: "" })
    useEffect(() => {
        setstate(props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd])
    }, [])

    useEffect(() => {
        setstate(props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd])
    }, [props.selectedStage, props.selectedWell, props.tbInd,
    props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd].time,
    props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd].inj,
    props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd].visc,
    props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd].density,
    props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd].timeStep,
    props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd].carter,
    props.wells[props.selectedWell][props.selectedStage].tableData[props.tbInd].compressibility,JSON.stringify(props.wells)])
    return (
        <div className="input-wraper d-flex justify-content-between align-items-center">
            <div className="num-input mx-1 my-1">
                <input className='' type="text" value={state.time}
                    onChange={
                        async e => {
                            setstate(state => ({ ...state, time: e.target.value }))
                            let newArr = props.wells
                            newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd] = await {
                                ...newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd],
                                time: e.target.value
                            }
                            props.setWells(newArr)
                        }
                    }
                />
            </div>
            <div className="num-input mx-1 my-1">
                <input className='' type="text" value={state.inj}
                    onChange={
                        async e => {
                            setstate(state => ({ ...state, inj: e.target.value }))
                            let newArr = props.wells
                            newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd] = await {
                                ...newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd],
                                inj: e.target.value
                            }
                            props.setWells(newArr)
                        }
                    }
                />
            </div>
            <div className="num-input mx-1 my-1">
                <input className='' type="text" value={state.visc}
                    onChange={
                        async e => {
                            setstate(state => ({ ...state, visc: e.target.value }))
                            let newArr = props.wells
                            newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd] = await {
                                ...newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd],
                                visc: e.target.value
                            }
                            props.setWells(newArr)
                        }
                    }
                />
            </div>
            <div className="num-input mx-1 my-1">
                <input className='' type="text" value={state.density}
                    onChange={
                        async e => {
                            setstate(state => ({ ...state, density: e.target.value }))
                            let newArr = props.wells
                            newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd] = await {
                                ...newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd],
                                density: e.target.value
                            }
                            props.setWells(newArr)
                        }
                    }
                />
            </div>
            <div className="num-input mx-1 my-1">
                <input className='' type="text" value={state.timeStep}
                    onChange={
                        async e => {
                            setstate(state => ({ ...state, timeStep: e.target.value }))
                            let newArr = props.wells
                            newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd] = await {
                                ...newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd],
                                timeStep: e.target.value
                            }
                            props.setWells(newArr)
                        }
                    }
                />
            </div>
            <div className="num-input mx-1 my-1">
                <input className='' type="text" value={state.carter}
                    onChange={
                        async e => {
                            setstate(state => ({ ...state, carter: e.target.value }))
                            let newArr = props.wells
                            newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd] = await {
                                ...newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd],
                                carter: e.target.value
                            }
                            props.setWells(newArr)
                        }
                    }
                />
            </div>
            <div className="num-input mx-1 my-1">
                <input className='' type="text" value={state.compressibility}
                    onChange={
                        async e => {
                            setstate(state => ({ ...state, compressibility: e.target.value }))
                            let newArr = props.wells
                            newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd] = await {
                                ...newArr[props.selectedWell][props.selectedStage].tableData[props.tbInd],
                                compressibility: e.target.value
                            }
                            props.setWells(newArr)
                        }
                    }
                />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wells: state.wells
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setWells: (userObject) => {
            dispatch({ type: "SET_WELLS", payload: userObject })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StagesInput)

