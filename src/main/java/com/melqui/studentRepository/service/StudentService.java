package com.melqui.studentRepository.service;

import com.melqui.studentRepository.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
