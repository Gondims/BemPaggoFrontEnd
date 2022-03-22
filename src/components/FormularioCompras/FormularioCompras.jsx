import React from "react";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Logo from '../imgs/caixa-de-embalagem.png';
import { styled } from '@mui/material/styles';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


function FormularioCompras(){
    
    let observacao = " ";

    const Img = styled('img')({
        marginTop: '-135px',
        marginLeft: '240px',
        width: '180px',
        height: '140px',
        position: 'absolute'
    });

    return(
        <form 
            onSubmit={(event) =>{
              event.preventDefault();
              console.log(observacao);
            }}
        >

            <Box sx={{ m: 4 }}>
                
                <Box    
                    sx={{ p: 3, bgcolor: '#2F3676', position: 'absolute', top: 180, borderRadius:'200px 200px 555% 280%', width: 440, height: 100 }}>

                    <Typography    
                        sx={{ p:3, marginTop: '-15px',color: 'white' }}> 
                            Formulário <br /> 
                            para compra de <br />   
                            Pacotes de adesivos
                    </Typography>

                  
                        <Img src={Logo} id="Img"/>
                    
                  
                </Box>      
                <Box sx={{ p: 3, bgcolor: '#F2F2F2', marginTop: 30, height: '100%'}}>

                    <Typography 
                        sx={{ fontWeight: 'bolder', marginTop: 8 }} >
                            Quais adesivos:
                    </Typography>

                    <FormGroup>
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label="React" 
                        />

                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label="Vue" 
                        />

                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label="Angular" 
                        />
                    </FormGroup>

                        <br /> 

                    <Typography 

                        sx={{ fontWeight: 'bolder' }}>Quantos adesivos de cada?.

                    </Typography>
                           
                    <Button 
                        
                        type="button" 
                        variant="contained" 
                        sx={{ paddingLeft: '0', margin: '10px',  bgcolor: '#2F3676'}} 
                        endIcon={<RemoveIcon/>} 
                    />
                   
                    <TextField 
                        
                        type="text"  value="0"  
                        size="small" 
                        sx={{ width: '50px', marginTop: '10px', borderRadius: '#2F3676'}}>
                     </TextField>
                    
                    <Button 
                       
                        
                        type="button" 
                        variant="contained" 
                        sx={{ paddingLeft: '0', margin: '10px', bgcolor: '#2F3676'}} 
                        endIcon={<AddIcon />}
                    />
                    

                    <br /> <br />
                 
                    <Typography 
                        sx={{ fontWeight: 'bolder'}}>
                            Observações:
                    </Typography>
                            
                    <TextField 
                        
                        onChange={(event) =>{
                            observacao = event.target.value;
                            console.log(observacao);
                        }}
                        multiline rows={4}  
                        type="text" 
                        placeholder="Alguma dúvida? Recado?"  
                        sx={{ bgcolor: '#DDE3E9',  margin: '10px',  width: 420}}
                    />

                </Box>
                <Box 
                    sx={{ p: 3, bgcolor: '#DDE3E9', borderRadius:'0px 0px 20px 20px', height: '40px'}}
                >

                    <Button 
                        type="submit" 
                        variant="contained" 
                        size="small" sx={{ float: 'right', margin: '5px', marginRight: '10px' , bgcolor: '#2F3676', paddingRight: '30px' , paddingLeft: '30px'}} >
                            Enviar
                    </Button>

                </Box>  
                
            </Box>
        </form>
    );
}

export default FormularioCompras ;