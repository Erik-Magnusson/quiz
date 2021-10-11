package com.quiz.quiz.controllers;
import com.quiz.quiz.models.Answer;
import com.quiz.quiz.repositories.AnswerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/answers")
public class AnswersController {

    @Autowired
    AnswerRepository answerRepository;

    @GetMapping
    public List<Answer> list() {
        return answerRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Answer get(@PathVariable Long id) {
        return answerRepository.getById(id);
    }

    @GetMapping
    @RequestMapping("validate/{id}")
    public boolean isCorrectAnswer(@PathVariable Long id) {
        return answerRepository.getById(id).isIs_correct();
    }

    @PostMapping
    public Answer create(@RequestBody final Answer answer) {
        return answerRepository.saveAndFlush(answer);
    }

    @RequestMapping(value="{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        answerRepository.deleteById(id);
    }

    @RequestMapping(value="{id}", method = RequestMethod.PUT)
    public Answer update(@PathVariable Long id, @RequestBody Answer answer) {
        Answer existingAnswer = answerRepository.getById(id);
        BeanUtils.copyProperties(answer, existingAnswer, "question_id");
        return answerRepository.saveAndFlush(existingAnswer);
    }

}
