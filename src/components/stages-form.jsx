import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import StagesInput from "./stages-input";

function StagesForm(props) {
  const [scheduleDivision, setscheduleDivision] = useState('');
  const [pumpTime, setPumpTime] = useState('');
  useEffect(() => {
    setscheduleDivision(props.wells[props.selectedWell][props.selectedStage].tableData.length)
    setPumpTime(props.wells[props.selectedWell][props.selectedStage].pumpingTime)
  }, [props.selectedStage, props.selectedWell,props.wells[props.selectedWell][props.selectedStage].tableData.length])
  return (
    <div className='stages-form py-4 px-2'>
      <div className=" d-flex justify-content-start " >
        <form className=' d-flex flex-column' >
          <form class="form-inline" >
            <div class="form-group">
              <label className="mr-lg-5" for="">Schedule division</label>
              <input
                type="number"
                id={"scheduleDivision" + props.wellNo + "=" + props.stageNo}
                class="form-control mx-sm-3"
                required
                value={scheduleDivision}
                onChange={(e) => {
                  // data => {
                  let data = props.wells
                  let wellData = Array.from({ length: e.target.value }, (v, i) => ({ time: "", inj: "", visc: "", density: "", timeStep: "", carter: "", compressibility: "" }))
                  // let newData = data[props.selectedWell]
                  // data[props.selectedWell][props.selectedStage].tableData = wellData
                  let newData = data.map((well, i) => {
                    if (i == props.selectedWell) {
                      return well.map((stage, i1) => {
                        if (i1 == props.selectedStage) {
                          return { tableData: wellData }
                        } else {
                          return stage
                        }
                      })
                    } else {
                      return well
                    }
                  })
                  // data[props.selectedWell] = newData

                  // return data
                  // }
                  props.setWells(newData)
                  setscheduleDivision(e.target.value)
                }}
              />
              {/* <button className="btn btn-warning" type="submit" style={{ borderRadius: '16px', color: 'green', }}>Go</button> */}
            </div>
          </form>
          <br />
          <form class="form-inline">
            <div class="form-group">
              <label className="mr-lg-4" for="">Total pumping time</label>
              <input type="number" id={"pumppingTime" + props.wellNo + "=" + props.stageNo} class="form-control mx-sm-3"
              value={pumpTime}
                onChange={
                  e => {
                    let newArr = props.wells
                    newArr[props.selectedWell][props.selectedStage].pumpingTime = e.target.value
                    props.setWells(newArr)
                    setPumpTime(e.target.value)
                  }
                }
              />
            </div>
          </form>
        </form>
      </div>
      <div className="schedule-division-wraper">
        <div className="heading-groups d-flex justify-content-between align-items-center">
          <h5 className="stage-headers p-2">Time</h5>
          <h5 className="stage-headers p-2">Injection rate(bpm)</h5>
          <h5 className="stage-headers p-2">Viscosity (cP)</h5>
          <h5 className="stage-headers p-2">Density of injection</h5>
          <h5 className="stage-headers p-2">fluid time step during shut-in(sec)</h5>
          <h5 className="stage-headers p-2">Carter leak off coefficient (m/s^0.5)</h5>
          <h5 className="stage-headers p-2">Fluid compressibillity (1/Pa)</h5>
        </div>
        <div className="schedule-input-wraper">
          {props.wells[props.selectedWell][props.selectedStage].tableData.length ? props.wells[props.selectedWell][props.selectedStage].tableData.map((v, tbInd) => (<StagesInput tbInd={tbInd} {...props} />)) : null}
          {/* <StagesInput />
          <StagesInput />
          <StagesInput /> */}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StagesForm)

