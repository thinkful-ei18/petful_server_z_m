## petful server Api
this is server side code for petful. It provides RESTful api to be consumed by client. 
Data is persisted in queue stored in server locally.

## accessable api
   * peek at the current dog in line  `get` `https://adoptanimal.herokuapp.com/dog` 
   * peek at the current cat in line  `get` `https://adoptanimal.herokuapp.com/cat` 
   * dequeue dog from queue `delete` `https://adoptanimal.herokuapp.com/dog`
   * dequeue cat from queue `delete` `https://adoptanimal.herokuapp.com/cat`
   * enqueue dog from queue `Post` `https://adoptanimal.herokuapp.com/dog`
   * enqueue cat from queue `Post` `https://adoptanimal.herokuapp.com/cat`
   * refresh db `get` `https://adoptanimal.herokuapp.com/refresh`
   
