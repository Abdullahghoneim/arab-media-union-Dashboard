import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MessagesServices } from "src/app/services/Messages.service";
@Component({
  selector: "app-messages-details",
  templateUrl: "./messages-details.component.html",
  styleUrls: ["./messages-details.component.scss"]
})
export class MessagesDetailsComponent implements OnInit {
  id: string;
  message;
  constructor(
    private router: ActivatedRoute,
    private messageService: MessagesServices,
    private route: Router
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params["id"];
    this.messageService.getMessage(this.id).subscribe(message => {
      this.message = message;
    });
  }
  deleteMessage() {
    this.messageService.deleteMessage(this.id);
    this.route.navigate(["/messages"]);
  }
}
