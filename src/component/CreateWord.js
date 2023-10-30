export default function CreateWord() {
  return <form>
    <div className='input_area'>
      <label>Eng</label>
      <input type='text' placeholder='computer'></input>
    </div>
    <div className='input_area'>
      <label>Kor</label>
      <input type='text' placeholder='컴퓨터'></input>
    </div>
    <div className='input_area'>
      <label>Day</label>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
    <button>저장</button>
  </form>
}