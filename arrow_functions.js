<!DOCTYPE html>
<html>
    <Body>

        <h2>JavaScript Arrow Functions</h2>

        <p>Arrow functiosn are not supported in 1E11 or earlier.</p>

        <p id="demo"></p>

        <script>
            const x = (x, y) => { return x * y};
            document.getElementById("demo").innerHTML = x(5, 5);
        </script>

    </Body>
</html>

