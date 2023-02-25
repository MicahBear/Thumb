export default function EventModal(){
    return(
           <form>
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title" placeholder="please enter title of event"/>
            <button type="submit">save</button>
          </form>
    )
}