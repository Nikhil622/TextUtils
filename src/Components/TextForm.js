import React,{useState} from 'react'

export default function TextForm(props){
    const [text, setText] = useState('');
  const handleUpperCase=()=>{
      setText(text.toUpperCase());
      props.alert('Converted to Uppercase','success');
  }
  const handleLowerCase=()=>{
    setText(text.toLowerCase());
    props.alert('Converted to Lowercase','success');
  }

  const update=(e)=>{
      setText(e.target.value);
  }
  const copyText=()=>{
      navigator.clipboard.writeText(text);
      props.alert('Text Copied to Clipboard','success');
  }
  const removeExtraSpace=()=>{
      let idx=0;
      let str='';
      while(idx<text.length)
      {  if(text[idx]===' ')
          {   str+=text[idx];
              while(idx<text.length && text[idx]===' ')
                    ++idx;
          }
          else
          {   while(idx<text.length && text[idx]!==' ')
                  str+=text[idx++];
          }
      }
      setText(str);
      props.alert('Removed Extra Spaces','success');
  }
  const word=()=>{
    let idx=0,res=0;
    while(idx<text.length)
    {  if(text[idx]===' ')
        {   while(idx<text.length && text[idx]===' ')
                  ++idx;
        }
        else
        {   ++res;
            while(idx<text.length && text[idx]!==' ')
                ++idx;
            
        }
    }
    return res;
}
  const clearText=()=>{
      setText('');
      props.alert('Cleared text.','success');
  }
  
 
  return (
    <>
       <div className="container" style={{backgroundColor:props.theme.color,color:'black'}}>
            <div className="mb-3">
                <label for="txt" className="form-label">Enter Text To Analyze</label>
                <textarea className="form-control" id="txt" rows="3" value={text} onChange={update} style={{backgroundColor:props.theme.body,color:'black',borderBlockColor:'black',borderInlineColor:'black',borderBottomColor:'black'}}></textarea>
            </div>
       </div>
       <div className="container" >
           <button className="btn btn  mx-1 my-1" onClick={handleUpperCase} style={{color:'black',backgroundColor:props.theme.body,borderBlockColor:'black',borderInlineColor:'black',borderBottomColor:'black'}}>Convert To UpperCase</button>
           <button className="btn btn  mx-1 my-1" onClick={handleLowerCase} style={{backgroundColor:props.theme.body,color:'black',borderBlockColor:'black',borderInlineColor:'black',borderBottomColor:'black'}}>Convert To LowerCase</button>
           <button className="btn btn  mx-1 my-1" onClick={removeExtraSpace} style={{backgroundColor:props.theme.body,color:'black',borderBlockColor:'black',borderInlineColor:'black',borderBottomColor:'black'}}>Remove Extra Space</button>
           <button className="btn btn  mx-1 my-1" onClick={copyText} style={{backgroundColor:props.theme.body,color:'black',borderBlockColor:'black',borderInlineColor:'black',borderBottomColor:'black'}}>Copy Text</button>
           <button className="btn btn  mx-1 my-1" onClick={clearText} style={{backgroundColor:props.theme.body,color:'black',borderBlockColor:'black',borderInlineColor:'black',borderBottomColor:'black'}}>Clear Text</button>
       </div>
       <div className="container" style={{backgroundColor:props.theme.body,color:'black'}}>
           <h4>Text Analysis</h4>
           <p>Words : {word()} and Characters : {text.length}</p>
           <h4>Preview</h4>
           <p>{text.length>0?text:'Enter text above for preview'}</p>
       </div>
    </>
  )
}
