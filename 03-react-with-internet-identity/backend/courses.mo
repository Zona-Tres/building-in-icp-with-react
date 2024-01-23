import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Nat32 "mo:base/Nat32";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";


actor {
    public type CourseId = Nat32;

    type Course = {
        title: Text;
        description: Text;
    };

    stable var courseId : CourseId = 0;

    let courses = HashMap.HashMap<Text, Course>(0, Text.equal, Text.hash);

    private func generateId() : Text {
        courseId += 1;
        return Nat32.toText(courseId);
    };

    public shared func create(title: Text, description: Text) : async Text {
        let id = generateId();

        let course: Course = {
            title = title;
            description = description;
        };

        courses.put(id, course);

        return id;
    };

    public query func getAll() : async [Course] {
        let values = courses.vals();

        return Iter.toArray(values);
    };
}
