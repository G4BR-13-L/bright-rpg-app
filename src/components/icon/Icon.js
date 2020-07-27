import React from 'react';

export const Icon = (props) =>{
	
		const icon = {
			books:require('../../assets/icons/books.png'),
			bright:require('../../assets/icons/bright.png'),
			bright_big:require('../../assets/icons/bright_big.png'),
			bright_big_filled:require('../../assets/icons/bright_big_filled.png'),
			circuit:require('../../assets/icons/circuit.png'),
			sheet:require('../../assets/icons/sheet.png'),
		}
		function calling(iconName){
			switch(iconName){
				case 'books':
					return(icon.books);
				break;
				case 'bright':
					return(icon.bright);
				break;
				case 'bright_big':
					return(icon.bright_big)
				break;
				case 'bright_big_filled':
					return(icon.bright_big_filled);
				break;
				case 'circuit':
					return(icon.circuit);
				break;
				case 'sheet':
					return(icon.sheet);
				break;
				default:
					return(icon.bright);
				break;
	
			}
		}
	return(
		<div style={{margin:'10px'}}>
			<img src={calling(props.iconName)} alt="" width={props.size} height={props.size}/>
		</div>
	);
}