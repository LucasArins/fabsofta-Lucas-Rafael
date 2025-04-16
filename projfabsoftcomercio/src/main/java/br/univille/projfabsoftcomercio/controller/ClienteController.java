package br.univille.projfabsoftcomercio.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.univille.projfabsoftcomercio.entity.Cliente;
import br.univille.projfabsoftcomercio.service.ClienteService;
import io.micrometer.core.ipc.http.HttpSender.Response;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/ap1/v1/clientes")
public class ClienteController {
    @Autowired
    private ClienteService Service;
    @GetMapping
    public ResponseEntity<List<Cliente>> getCliente(){
       
       var listaClientes = Service.getAll();
         return new ResponseEntity<List<Cliente>>(listaClientes, HttpStatus.OK);
    }
    
}
