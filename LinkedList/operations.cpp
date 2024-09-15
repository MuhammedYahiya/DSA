#include <iostream>
using namespace std;

class node{
public:
	int data;
	node *next;
	
	node(int d){
		data = d;
		next = nullptr;
	}

};

node* insertAtBegining(int data, node* head){
	if(head == NULL) return new node(data);
	node* nnode = new node(data);
	nnode->next = head;
	head = nnode;
	return head;
}

node* insertAtEnd(int data, node* head){
	if(head == nullptr) return new node(data);
	node* temp = head;
	node* nnode = new node(data);
	while(temp->next != nullptr){
		temp = temp->next;
	}
	temp->next = nnode;
	return head;
}

node* insertAtAnyPos(int data, int pos, node* head){
	if(head == nullptr) return new node(data);
	node* nnode = new node(data);
	if(pos == 1){
		nnode -> next = head;
		head = nnode;
		return head;
	}
	node* temp = head;
	int cnt = 1 ;
	while(temp != nullptr){
		
		if(cnt == pos-1){
			nnode->next = temp->next;
			temp->next = nnode;
			break;
		}
		temp = temp->next;
		cnt++;
	}
	return head; 
}

node* deleteFromBeg(node* head){
	if(head == nullptr) return nullptr;
	node* temp = head;
	head = head->next;
	delete temp;
	return head;
	
}

node* deleteFromEnd(node* head){
	if(head == nullptr) return nullptr ;
	if(head -> next == nullptr) {
		delete head;
		return nullptr;
	}
	node* temp = head;
	while(temp -> next -> next != nullptr){
		temp = temp -> next;
	}
	delete temp->next;
	temp->next = nullptr;
	return head;
}

node* deleteFromAnyPos(node* head, int pos){
	if(head == nullptr) return nullptr;
	
	if(pos == 1){
		 node* temp = head;
		 head = head->next;
		 delete temp;
		 return head;
	}
	int cnt = 0;
	node *temp = head;
	node *prev = nullptr;
	while(temp != nullptr){
		cnt++;
		if(cnt == pos){
			prev -> next = temp->next;
			delete temp;
			break;
		}
		prev = temp;
		temp = temp->next;
	}
	return head;
}

int main(){
	node *head = nullptr;
	head = insertAtBegining(10,head);
	head = insertAtBegining(20,head);
	head = insertAtEnd(30,head);
	head = insertAtEnd(40,head);
	head = insertAtAnyPos(50,3,head);
	head = insertAtAnyPos(5,1,head);
	head = deleteFromBeg(head);
	head = deleteFromEnd(head);
	head = deleteFromAnyPos(head, 3);

	node *temp = head;
   	while(temp != nullptr){
   		cout << temp->data << " ";
   		temp = temp->next;
	}
    return 0;
}
