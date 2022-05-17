import { Pulsar } from '@uiball/loaders'


function Loader() {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <div style={style}>
      <Pulsar
        size={40}
        speed={1.75}
        color="black"
      />
    </div>
  )
}

export default Loader