<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>data demo</title>
  <style>
  div {
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<div>
  The values stored were
  <span></span>
  and
  <span></span>
</div>
 
<script>
$( "div" ).data( "test", { first: 16, last: "pizza!" } );
$( "span:first" ).text( $( "div" ).data( "test" ).first );
$( "span:last" ).text( $( "div" ).data( "test" ).last );
</script>
 
</body>
</html>