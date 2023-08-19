function skillsMember()
{
    $skills = new Skills();
    $skills->id = $_POST['id'];
    $skills->name = $_POST['name'];
    $skills->level = $_POST['level'];
    $skills->id_member = $_POST['id_member'];
    $skills->id_skill = $_POST['id_skill'];
    $skills->save();
    header('Location: /admin');
}