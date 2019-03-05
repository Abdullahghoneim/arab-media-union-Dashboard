import { Component, OnInit } from '@angular/core';
import { MessagesServices } from 'src/app/services/Messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages;
  constructor(private messageService:MessagesServices) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(messages => this.messages = messages  )
  
    
  }

}
