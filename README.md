#SoLoMo

## SoLoMo is a site for hyper-super-local networking. 

* Find out who your neighbors are. 
* Plan events like block parties together. 
* Help each other out. 

Information presented to you is always presented in the context of your locale -- you decide the radius you want to track for events, etc. 

The main feature of SoLoMo is our personalized boards on which you can post and comment on whatever you like. 

You can also create a personal profile. 


<% @posts.each do |post| %>
	<tr>
  	<td><strong><%= post.title %>: </strong><%= post.body %></td>
  	<td><%= link_to 'Show', post %></td>
  	<td><%= link_to 'Edit', edit_post_path(post) %></td>
    <td><%= link_to 'Destroy', post, :confirm => 'Are you sure?', :method => :delete %></td>
    <br>
  </tr>
<% end %>