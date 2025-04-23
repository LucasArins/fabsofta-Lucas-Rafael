package br.univille.projfabsoftcomercio.controller;
import java.util.List;

import javax.print.DocFlavor.READER;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.univille.projfabsoftcomercio.entity.Cliente;
import br.univille.projfabsoftcomercio.service.ClienteService;
import io.micrometer.core.ipc.http.HttpSender.Response;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
 
    @PostMapping
    public ResponseEntity<Cliente> 
            postCliente(@RequestBody Cliente cliente){
      if(cliente == null){
        return ResponseEntity.badRequest().build();
      }
      if(cliente.getId() == 0){
        Service.save(cliente);
        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
      }
      return ResponseEntity.badRequest().build();

    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente>
       putCliente(@PathVariable long id,
                  @RequestBody Cliente cliente){
       if(id <=0 || cliente == null){
        return ResponseEntity.badRequest().build();
       }
       var clienteAntigo = Service.getById(id);
       if(clienteAntigo == null){
          return ResponseEntity.notFound().build();
       }

       clienteAntigo.setNome(cliente.getNome());
       clienteAntigo.setEndereco(cliente.getEndereco());
       clienteAntigo.setCelular(cliente.getCelular());
       clienteAntigo.setCpf(cliente.getCpf());
       clienteAntigo.setPedidos(cliente.getPedidos());
       clienteAntigo.setFavoritos(cliente.getFavoritos());

       Service.save(clienteAntigo);
       return new ResponseEntity<Cliente>(clienteAntigo, HttpStatus.OK);
    }
}
